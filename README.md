# Create deployment

This action is deprecated in favor of https://github.com/maxkomarychev/oction-create-deployment

Create deployment

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-repos-create-deployment

# Quick start

```yaml
- uses: maxkomarychev/create-deployment@v0.5.2
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    ref: master
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```


# Inputs

| Name | Is required | Description |
|---|---|---|
|token|true|A token to perform API calls
|ref|true|The ref to deploy. This can be a branch, tag, or SHA.
|task|false|Specifies a task to execute (e.g., deploy or deploy:migrations).
|auto_merge|false|Attempts to automatically merge the default branch into the requested ref, if it's behind the default branch.
|environment|false|Name for the target deployment environment (e.g., production, staging, qa).
|description|false|Short description of the deployment.
|transient_environment|false|Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future
|production_environment||Specifies if the given environment is one that end-users directly interact with.
|required_contexts|false|The status contexts to verify against commit status checks. Comma separated list, empty string or "<<EMPTY>>".

# Outputs

| Name | Description |
|---|---|
|id|Id of created deployment

