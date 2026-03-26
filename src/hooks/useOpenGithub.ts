import { useCallback } from "react";

const useOpenGithub = (username: string): CallableFunction => {
  const openGithub: CallableFunction = useCallback(
    (repoName?: string) => {
      const baseUrl: string = `https://github.com/${username}`;
      const url: string = repoName ? `${baseUrl}/${repoName}` : `${baseUrl}`;

      window.open(url, "_blank", "noopener,noreferrer");
    },
    [username]
  );

  return openGithub;
}

export default useOpenGithub;