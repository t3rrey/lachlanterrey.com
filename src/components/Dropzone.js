import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function Dropzone(props) {
  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result;
        console.log(binaryStr);
        props.onDrop(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{
        height: "100vh",
        position: "absolute",
        top: "0",
        width: "100%",
        zIndex: 1,
      }}
      onClick={null}
    >
      <input {...getInputProps()} />
    </div>
  );
}

export default Dropzone;
