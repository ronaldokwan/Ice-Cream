import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button type="submit" aria-disabled={pending}>
          Submitting...
        </button>
      ) : (
        <button type="submit">Submit</button>
      )}
    </>
  );
}
