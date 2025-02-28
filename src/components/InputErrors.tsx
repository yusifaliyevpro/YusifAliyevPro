export default function InputErrors({ errors }: { errors: string[] }) {
  return (
    <ul className="mt-1 space-y-1">
      {errors.map((error, i) => (
        <li key={i}>{error}</li>
      ))}
    </ul>
  );
}
