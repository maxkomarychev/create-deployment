# Create deployment

Create deployment

This action is a wrapper for one of [octokit's](https://octokit.github.io/rest.js) methods.

Original docs can be found here: https://octokit.github.io/rest.js/#octokit-routes-repos-create-deployment

# Usage

```yaml
- uses: maxkomarychev/create-deployment@v0.3.0
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    ref: master
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
