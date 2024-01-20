import JustValidate from "just-validate";

const formDatasEl = document.getElementById("formDatas");
const validateForm = new JustValidate(formDatasEl);

console.log(validateForm);

validateForm.addField(
  "#course-title",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorFieldCssClass: ["invalid"],
    errorLabelCssClass: ["text-sm"],
  }
);

validateForm.addField(
  "#contentType",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorFieldCssClass: ["invalid"],
    // errorLabelCssClass: ["text-sm"],
  }
);
validateForm.addField(
  "#author",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorFieldCssClass: ["invalid"],
    // errorLabelCssClass: ["text-sm"],
  }
);
validateForm.addField(
  "#content-duration",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorFieldCssClass: ["invalid"],
    // errorLabelCssClass: ["text-sm"],
  }
);
validateForm.addField(
  "#content-notes",
  [
    {
      rule: "required",
    },
    {
      rule: "minLength",
      value: 3,
    },
    {
      rule: "maxLength",
      value: 15,
    },
  ],
  {
    errorFieldCssClass: ["invalid"],
    // errorLabelCssClass: ["text-sm"],
  }
);
