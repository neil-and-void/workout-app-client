interface SetListProps {
  sets: Array<ExerciseSet>;
}

const SetList = ({ sets }: SetListProps) => {
  return (
    <div>
      {sets.map((set, idx) => {
        <div key={idx}>hi</div>;
      })}
    </div>
  );
};

export default SetList;
