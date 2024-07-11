import BlueButton from "../../components/buttons/blue-button";
import BaseLayout from "../../components/layouts/BaseLayout/BaseLayout";
import RadioButtonGroup from "../../components/radio-button-group";

const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
    { label: 'Option 4', value: 'option4' },
]

export function QuestionPageFather() {
    return <>
   <BaseLayout>
   <h1>Вопрос N. Текст вопроса</h1>
   <RadioButtonGroup name={"Вопрос"} options={options} selectedValue={""} onChange={() => {}}></RadioButtonGroup>
   <br /><br /><br /><br />
   <BlueButton text={"Далее"} onClick={() => {}}></BlueButton>
   </BaseLayout>
    </>
}