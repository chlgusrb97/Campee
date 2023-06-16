import {useQueryBoard} from "../../../../../src/components/commons/customs/useQueries.ts/useQueries";
import BoardsRegistrationUI from "../../../../../src/components/units/boards/registration/boards.registration.index";

export default function BoardsEditPage() {
  const {data} = useQueryBoard();
  return <BoardsRegistrationUI isEdit={true} data={data} />;
}
