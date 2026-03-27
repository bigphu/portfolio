import { useState, useEffect } from "react";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  forks_count: number;
  stargazers_count: number;
  language: string;
}

const CACHE_DURATION: number = 60 * 60 * 1000; // 1 hour

const useFetchRepo = (username: string, repoName: string) => {
  const [repo, setRepo] = useState<GitHubRepo | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepo = async () => {

      const cacheKey: string = `github_cache_${username}_${repoName}`;
      const cachedRepo: string | null = localStorage.getItem(cacheKey);
      
      if (cachedRepo) {
        const cachedData= JSON.parse(cachedRepo);
        const isValidCache: boolean = (Date.now() - cachedData.timestamp) < CACHE_DURATION;

        if (isValidCache) {
          setRepo(cachedData.repo);
          setIsLoading(false);
          setError(null);

          return;
        }
      }

      try {
        setIsLoading(true);
        const res = await fetch(`https://api.github.com/repos/${username}/${repoName}`)

        if (!res.ok) {
          throw new Error(`Failed to fetch ${repoName} of ${username}`); 
        }

        const data = await res.json();

        localStorage.setItem(cacheKey, JSON.stringify({
          repo: data,
          timestamp: Date.now()
        }));

        setRepo(data);
        setError(null);
      } catch (err: any) {
        setError(err.message || "Failed to fetch repository");
      } finally {
        setIsLoading(false);
      }
     }

    if (username && repoName) {
      fetchRepo();
    }
  }, [username, repoName])


  return { repo, isLoading, error };
};

export default useFetchRepo;