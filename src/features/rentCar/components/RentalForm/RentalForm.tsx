import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { resetUserRentalData, submitRentalForm } from "../../rentCarSlice";
import dayjs from "dayjs";
import { useFormik } from "formik";
import FormControl from "@/components/FormControl/FormControl";
import Datepicker from "@/components/Datepicker/Datepicker";
import rentalFormSchema, {
  RentalFormValues,
} from "@/libs/yup/schemas/rentalForm";

const RentalForm = () => {
  const dispatch = useAppDispatch();
  const selectedCarCategory = useAppSelector(
    (state) => state.rentCar.selectedCar?.category,
  );
  const { estimatedKilometeres, drivingLicenseIssueDate, rentalPeriod } =
    useAppSelector((state) => state.rentCar.userRentalData);
  const isInexpreiencedDriver = useAppSelector(
    (state) => state.rentCar.isInexperiencedDriver,
  );
  const isPremiumCarRentalPossible = useAppSelector(
    (state) => state.rentCar.isPremiumCarRentalPossible,
  );

  const initialFormikValues: RentalFormValues = {
    estimatedKilometeres: estimatedKilometeres ?? 100,
    drivingLicenseIssueDate: drivingLicenseIssueDate ?? "",
    rentalPeriod: {
      startDate: rentalPeriod.startDate ?? "",
      endDate: rentalPeriod.endDate ?? "",
    },
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialFormikValues,
    validationSchema: rentalFormSchema,
    onSubmit: (values) => {
      const currentDate = dayjs();
      const licenseIssueDate = dayjs(values.drivingLicenseIssueDate);
      const driverYearsOfExperience = currentDate.diff(
        licenseIssueDate,
        "years",
      );

      dispatch(
        submitRentalForm({
          userRentalData: values,
          driverYearsOfExperience,
        }),
      );
    },
  });

  const {
    values,
    errors,
    touched,
    dirty,
    setFieldValue,
    setFieldError,
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
  } = formik;

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <FormControl
        inputId="kilometers-input"
        label="Estimated number of kilometers to travel"
        helperText="The maximum possible distance is 20000 km"
        error={
          touched.estimatedKilometeres ? errors.estimatedKilometeres : undefined
        }
      >
        <input
          name="estimatedKilometeres"
          id="kilometers-input"
          type="number"
          min={1}
          value={values.estimatedKilometeres}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormControl>
      <FormControl
        inputId="license-date-datepicker"
        label="Driving license date of issue"
        warning={
          values.drivingLicenseIssueDate === drivingLicenseIssueDate &&
          isInexpreiencedDriver
            ? "Due to little experience, an additional fee is charged"
            : undefined
        }
        error={
          values.drivingLicenseIssueDate === drivingLicenseIssueDate &&
          !isPremiumCarRentalPossible &&
          selectedCarCategory === "premium"
            ? "The premium cars can not be rented to drivers with less than 3 years of experience"
            : touched.drivingLicenseIssueDate
              ? errors.drivingLicenseIssueDate
              : undefined
        }
      >
        <Datepicker
          inputId="license-date-datepicker"
          variant="single"
          dateLooking="backward"
          displayFormat="DD/MM/YYYY"
          maxDate={new Date()}
          value={{
            startDate: values.drivingLicenseIssueDate || null,
            endDate: values.drivingLicenseIssueDate || null,
          }}
          onChange={(value) => {
            if (value) {
              setFieldError("drivingLicenseIssueDate", undefined);
            }
            setFieldValue(
              "drivingLicenseIssueDate",
              value ? value.startDate : "",
            );
          }}
        />
      </FormControl>
      <FormControl
        inputId="rental-period-datepicker"
        label="Choose rental period"
        error={
          touched.rentalPeriod?.endDate
            ? errors.rentalPeriod?.endDate
            : undefined
        }
      >
        <Datepicker
          inputId="rental-period-datepicker"
          variant="range"
          dateLooking="forward"
          displayFormat="ddd, DD/MM/YY"
          separator=" - "
          placeholder="Pickup Date - Return Date"
          minDate={new Date()}
          value={{
            startDate: values.rentalPeriod.startDate || null,
            endDate: values.rentalPeriod.endDate || null,
          }}
          onChange={(value) => {
            if (value) {
              setFieldError("rentalPeriod.endDate", undefined);
            }
            setFieldValue(
              "rentalPeriod.startDate",
              value ? value.startDate : "",
            );
            setFieldValue("rentalPeriod.endDate", value ? value.endDate : "");
          }}
        />
      </FormControl>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="submit"
          disabled={!dirty}
          className="btn enabled:hover:shadow-natural"
        >
          {rentalPeriod.endDate ? "Recalculate" : "Calculate"}
        </button>
        <button
          type="button"
          onClick={() => {
            dispatch(resetUserRentalData());
            if (dirty) {
              resetForm();
            }
          }}
          className="btn btn-outlined"
        >
          reset
        </button>
      </div>
    </form>
  );
};
export default RentalForm;
