import { FormContainer } from "@powell/components/FormContainer";
import { Checkbox } from "@powell/components/Checkbox";
import { Button } from "@powell/components/Button";

export const CheckboxPage = () => {
  return (
      <FormContainer onSuccess={v => console.log(v)}>
        <div className="flex flex-col gap-2 p-10">
          <Checkbox label="label" name="n"/>
        </div>

        <Button type="submit" label="submit"/>
      </FormContainer>
  )
}
