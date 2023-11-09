import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { getLikes, toggleLike } from "./api";
import { RenderCount } from "./utils";

export function PostTwo() {
  return (
    <div>
      <h1>Query 2 (fast, hapi)</h1>
      <p>wassup</p>
      <p>
        <LikeCount /> like
      </p>
      <LikeButton />
      <p>
        liked by: <WhoLiked />
      </p>
      <RenderCount />
    </div>
  );
}

function useLikeMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: toggleLike,
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ["like"] });
      const prevLike = queryClient.getQueryData(["like"]);
      queryClient.setQueryData(["like"], (old) => {
        if (old.includes("me")) {
          return old.filter((l) => l !== "me");
        } else {
          return [...old, "me"];
        }
      });
      return { prevLike };
    },
    onError: (err, newLikes, context) => {
      console.error(err);
      queryClient.setQueryData(["like"], context.prevLike);
    },
    // Always refetch after error or success:
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["like"] });
    }
  });
}

function LikeButton() {
  const likeMutation = useLikeMutation();
  return (
    <button
      onClick={async () => {
        likeMutation.mutate();
      }}
    >
      <LikeIcon />
    </button>
  );
}

function useLikes() {
  return useQuery({
    queryKey: ["like"],
    queryFn: getLikes
  });
}

function LikeCount() {
  const { data: likes, isLoading } = useLikes();
  if (isLoading) {
    return "...";
  }

  return likes.length;
}

function WhoLiked() {
  const { data: likes, isLoading } = useLikes();
  if (isLoading) {
    return "...";
  }
  return likes.join(", ");
}

function LikeIcon() {
  const { data: likes, isLoading } = useLikes();
  if (isLoading) {
    return "...";
  }
  return likes.includes("me") ? "💔" : "💖";
}
