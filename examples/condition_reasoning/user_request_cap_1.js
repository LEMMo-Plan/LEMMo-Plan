// Define the task description as a JavaScript string
var user_request_condition_cap_1_description = `
Based on the PDDL domain, for each skill, add effect as a function for success_condition in the robot_controller of the CapSkillLibrary. For example:
`;

var user_request_condition_cap_1_code = `
def is_grasped():
    # post-condition to check if the object is grasped
    pass

def move_to_grasp(self):
    print(f"Moving to grasp the {self.target_object}")
    robot_controller.move_cart_pose(self.target_object, success_condition=is_grasped())
    robot_controller.grasp()
`;

var user_request_condition_cap_1_footer = `
Leave the specific implementation of the function empty.
`;

// Insert the description, code, and footer separately into the container
document.getElementById('user-request-condition-cap-1-container').innerHTML = 
  '<p>' + user_request_condition_cap_1_description.trim().replace(/\n/g, '<br>') + '</p>' +
  '<pre style="background-color: #f8f9fa; overflow: visible; white-space: pre-wrap; word-wrap: break-word;"><code class="language-python">' + Prism.highlight(user_request_condition_cap_1_code.trim(), Prism.languages.python, 'python') + '</code></pre>' +
  '<p>' + user_request_condition_cap_1_footer.trim() + '</p>';
