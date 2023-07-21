import { ChangeEvent, useState } from "react";

const useForm = <T>(initialState: T, onSubmit: () => void) => {
  const [formData, setFormData] = useState<T>(initialState);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: SubmitEvent) => {
    event.preventDefault();
    onSubmit();
  };

  return { formData, handleInputChange, handleSubmit };
};
