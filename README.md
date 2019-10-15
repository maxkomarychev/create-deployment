# Create deployment

Create deployment

# Usage


```yaml
- uses: maxkomarychev/create-deployment@0.1.1
  id: my_step_id
  with:
    token: ${{ secrets.GITHUB_TOKEN }}
    ref: master
- name: Print outputs
  run: |
    echo ${{ steps.my_step_id.outputs.id }}
```
