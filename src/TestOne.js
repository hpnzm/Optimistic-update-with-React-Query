import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getLikes, toggleLike } from "./api";
import { RenderCount } from "./utils";

export function PostOne() {
  const { data: likes } = useQuery({
    queryKey: ["like"],
    queryFn: getLikes
  });
  const queryClient = useQueryClient();

  if (!likes) return <div>loading...</div>;

  return (
    <div>
      <h1>Query 1 (slow, sad)</h1>
      <p>cool</p>
      <p>{likes.length} like</p>
      <button
        onClick={async () => {
          await toggleLike();
          queryClient.refetchQueries({ queryKey: ["like"] });
        }}
      >
        {likes.includes("me") ? "💔" : "💖"}
      </button>
      <p>liked by: {likes.join(", ")}</p>
      <RenderCount />
    </div>
  );
}
