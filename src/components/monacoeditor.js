import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const EditorContainer = (props) => {
  return <Paper
            style={{
              width: props.width ? props.width : '500px', 
              height: props.height ? props.height: '500px',
              borderTop: '2px solid #45387F', paddingTop: '10px', margin: '0px 4px 15px'}}
              id="editor-container">
          </Paper>
};

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '4.25rem'
  }
}));


function MonacoWindow() {
  const [initialized, setInitialized] = useState(false);
  let editor = null; 
  let monaco = null;

  useEffect(() => {
    if (!initialized) {
      import("monaco-editor")
      .then( Monaco => {
        monaco = Monaco;
        editor = monaco.editor.create(document.getElementById("editor-container"), {automaticLayout: true});
        setInitialized(true);
      })
    }
  });

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <EditorContainer width={1000} height={700}/>
    </div>
  );
  }

export default MonacoWindow;