export const getRepo = () => {
  const ownerAndRepo =
    process.env.NODE_ENV === "development"
      ? "9sako6/continuity"
      : process.env.GITHUB_ACTION_REPOSITORY;

  if (!ownerAndRepo) return;

  return ownerAndRepo.split("/")[1];
};
