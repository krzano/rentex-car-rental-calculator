import yup from "../config";

const rentalFormSchema = yup.object().shape({
  estimatedKilometeres: yup
    .number()
    .min(
      1,
      ({ min }) =>
        `The number of kilometers has to be equal or higher than ${min}`,
    )
    .max(20000, ({ max }) => `The number must be less than ${max} km`)
    .required(),
  drivingLicenseIssueDate: yup.string().required(),
  rentalPeriod: yup
    .object({
      startDate: yup.string().required(),
      endDate: yup.string().required(),
    })
    .required(),
});

export type RentalFormValues = yup.InferType<typeof rentalFormSchema>;

export default rentalFormSchema;
