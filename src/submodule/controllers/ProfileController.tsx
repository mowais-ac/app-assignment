import { validate } from "../common/common";
import { ProfileFormProps } from "../common/interfaces/interfaces";

export class ProfileController {
  /**
   * Validate
   */
  validate = (inputs: ProfileFormProps) => {
    let isValid =
      validate.email(inputs.email_address) &&
      !validate.phone(inputs.phone_number) &&
      !validate.empty(inputs.gender) &&
      !validate.empty(inputs.website_url) &&
      !validate.empty(inputs.registration_number) &&
      validate.hasFile(inputs.attach_document_1.file) &&
      validate.hasFile(inputs.attach_document_2.file);
    return isValid;
  };
  /**
   * Profile list
   */
  index = (inputs: any) => {
    console.log("list request", inputs);
  };

  /**
   * Profile create
   */
  create = () => {
    console.log("create request");
  };

  /**
   * Profile update
   */
  update = () => {
    console.log("update request");
  };

  /**
   * Profile destroy
   */
  destroy = () => {
    console.log("delete request");
  };
}
