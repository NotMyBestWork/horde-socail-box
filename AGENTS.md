# GitHub CLI and Actions identities

`gh` commands use the active account for the GitHub host. Check it with `gh auth status` and switch accounts with `gh auth switch --hostname github.com --user <username>`. A `GH_TOKEN` environment variable overrides the stored account for that process.

Git transport can use a different identity. HTTPS remotes use GitHub CLI credentials when `gh auth setup-git` is configured; SSH remotes use the GitHub account associated with the selected SSH key. Check SSH identity with `ssh -T git@github.com`.

GitHub Actions does not inherit the local CLI account. Workflow jobs normally use the repository-scoped `GITHUB_TOKEN`, with access controlled by the workflow's `permissions:` block. Set `GH_TOKEN` explicitly for `gh` commands inside a workflow; it can be `${{ github.token }}` or an intentionally selected PAT or GitHub App token. The workflow run's actor and the job token's permissions are separate identities.
