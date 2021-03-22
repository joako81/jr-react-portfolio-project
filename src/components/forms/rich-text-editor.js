import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export default class RichTextEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editorState: EditorState.createEmpty()
    };

    this.onEditorStateChange = this.onEditorStateChange.bind(this);
    this.getBase64 = this.getBase64.bind(this);
    this.uploadFile = this.uploadFile.bind(this);
  }

  onEditorStateChange(editorState) {
    this.setState({editorState} , 
    this.props.handleRichTextEditorChange(
        draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))
    )
    );  //este segundo argumento nos permite protegernos de los retrasos que puedan existir

   
  }


  getBase64(file, callback) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =() => callback(reader.result);
    reader.onerror= error =>{};

  }

  uploadFile(file) {
    return new Promise((resolve, reject) =>{
      this.getBase64(file,data => resolve({data: {link:data } }));
  });
  }
  

  render() {
    return (
      <div>
        <Editor
          editorState={this.state.editorState}
          wrapperClassName="demo-wrapper"
          editorClassname="demo-editor"
          onEditorStateChange = {this.onEditorStateChange}
          toolbar = {{
            inline: { inDropdown: true },
            list: { inDropdown: true },
            textAlign: { inDropdown: true },
            link: { inDropdown: true },
            history: { inDropdown: true },
            image: {
              uploadCallback: this.uploadFile, // función que hay que crear
              alt: { present: true, mandatory: false }, //alternativa y metadatos
              previewImage: true, //vista previa
              inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg" // tipos de imagen aceptados
            }

          }}
        />
      </div>
    );
  }
}