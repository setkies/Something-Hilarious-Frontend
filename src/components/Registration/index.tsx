interface GenerateModalProps {
  closeModal: () => void;
}

const Registration = ({ closeModal }: GenerateModalProps) => {
  return (
    <div>
      <p onClick={closeModal}>close</p>
      <h1>asdf</h1>
    </div>
  );
};

export default Registration;
