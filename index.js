const core = require("@actions/core");
const github = require("@actions/github");

function parse_array(input_name) {
  const input_value = core.getInput(input_name)
  if (input_value === "") {
    return undefined; 
  }
  if (input_value === "<<EMPTY>>") {
    return [];
  }
  return input_value.split(",");
}

function parse_boolean(input_name) {
  const input_value = core.getInput(input_name)
  if (!input_name) {
    return false
  }
  return input === "true"
}

try {
  const token = core.getInput("token");
  const ref = core.getInput("ref");
  const task = core.getInput("task");
  const auto_merge = parse_boolean("auto_merge");
  const environment = core.getInput("environment");
  const description = core.getInput("description");
  const transient_environment = parse_boolean("transient_environment");
  const production_environment = parse_boolean("production_environment");
  const required_contexts = parse_array("required_contexts");
  const client = new github.GitHub(token);
  const context = github.context;
  client.repos.createDeployment({
    ...context.repo,
      token,
      ref,
      task,
      auto_merge,
      environment,
      description,
      transient_environment,
      production_environment,
      required_contexts,
    headers: {
      "Accept": "application/vnd.github.flash-preview+json, application/vnd.github.ant-man-preview+json",
    }
  }).then(response => {
    console.log('response', response)
    core.setOutput("id", response.data.id)
  })
  .catch(error => {
    console.log("error 1", error);
    core.setFailed(error.message);
  });
} catch (error) {
  console.log("error 2", error);
  core.setFailed(error.message);
}
