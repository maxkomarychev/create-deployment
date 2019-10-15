# Create deployment

Create deployment

# Usage


```yaml
- uses: maxkomarychev/create-deployment@0.1.0
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    ref: ${{ github.event.pull_request.head.ref }}
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
