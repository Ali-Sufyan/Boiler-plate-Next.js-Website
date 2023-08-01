import React from "react";

export default function InputError({ error }: any) {
  return (
    <>
      <p className="mt-1 text-red-500">
        {error instanceof Object ? error.message : error}
      </p>
    </>
  );
}
