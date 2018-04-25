import * as React from 'react';
import { Editor, EditorState } from 'draft-js';

class MyEditor extends React.Component {
    onChange: (editorState: any) => any;
    state: { editorState: EditorState; };
    constructor() {
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        };
        this.onChange = (editorState) => this.setState({ editorState });
    }
    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                onChange={this.onChange}
                placeholder="Write something cool..."
            />
        );
    }
}

export default MyEditor