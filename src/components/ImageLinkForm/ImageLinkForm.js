import "./ImageLinkForm.css";

const ImageLinkForm = ({onInputChange, onSubmit}) => {
  return (
    <div>
      <p className="f3 tc white">
        {"This Magic Brain will detect faces in your picture. give it a try!"}
      </p>
      <div className="center">
        <div className=' form center pa4 br3 shadow-5'>
          <input
            style={{ outline: "none", fontFamily: "san serif" }}
            className="f4 pa2 w-70 center"
            type="text" placeholder='url address...' onChange={onInputChange}
          />
          <button
            style={{ border: "none" }}
            className="w-30 grow f4 pa2  link ph3 pvs dib white bg-light-purple"
          onClick={onSubmit}
          >
            Detect 
            </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
