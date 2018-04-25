import * as React from 'react';
import { EditorState, ContentState, RichUtils, convertFromRaw, ContentBlock, RawDraftContentState } from 'draft-js';
import Editor, { composeDecorators } from 'draft-js-plugins-editor';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createBlockDndPlugin from 'draft-js-drag-n-drop-plugin';

const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const blockDndPlugin = createBlockDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;

const decorator = composeDecorators(
    resizeablePlugin.decorator,
    alignmentPlugin.decorator,
    focusPlugin.decorator,
    blockDndPlugin.decorator
);
const imagePlugin = createImagePlugin({ decorator });

const plugins = [
    blockDndPlugin,
    focusPlugin,
    alignmentPlugin,
    resizeablePlugin,
    imagePlugin
];

/* eslint-disable */
const initialState = {
    "entityMap": {
        "0": {
            "type": "image",
            "mutability": "IMMUTABLE",
            "data": {
                "src": "https://www.google.co.in/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
        }
    },

    "blocks": [
        {
        "key": "9gm3s",
        "text": "You can have images in your text field. This is a very rudimentary example, but you can enhance the image plugin with resizing, focus or alignment plugins.",
        "type": "unstyled",
        "depth": 0,
        "inlineStyleRanges": [],
        "entityRanges": [],
        "data": {}
        },
        {
            "key": "ov7r",
            "text": " ",
            "type": "atomic",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [{
                "offset": 0,
                "length": 1,
                "key": 0
            }],
            "data": {}
        }, {
            "key": "e23a8",
            "text": "See advanced examples further down …",
            "type": "unstyled",
            "depth": 0,
            "inlineStyleRanges": [],
            "entityRanges": [],
            "data": {}
        }
    ]
};
/* eslint-enable */

const editorStyle = {
    editor: {
        boxSizing: 'border-box',
        border: '1px solid #ddd',
        cursor: 'text',
        padding: 16,
        borderRadius: 2,
        marginBottom: 4,
        boxShadow: 'inset 0px 1px 8px -3px #ABABAB',
        background: '#fefefe'
    },

    options: {
        marginBottom: 20
    }
}
const text = 'Image div';

const storeSample = {
    article: {
        __v0: 0,
        _id: "5a573965d495833744d71f46",
        draftcontent: "{\"entityMap\":{},\"blocks\":[{\"key\":\"6s7sp\",\"text\":\"I am Batman\",\"type\":\"unstyled\",\"depth\":0,\"inlineStyleRanges\":[],\"entityRanges\":[],\"data\":{ }}]}",
        title: "Batman",
        type: "",
        userId: "5a39538ee3d05642efdaf1dc"
    }
};



export default class Image extends React.Component<any, any> {
    //state: { editorState: EditorState; };
    //state =  {
    //    editorState: EditorState.createWithContent(convertFromRaw(initialState)),
    //};
    //state = { editorState: EditorState.createWithContent(ContentState.createFromText(text)) };

    onChange: (editorState: any) => any;
    constructor() {
        super();  
        const content = convertFromRaw(JSON.parse(storeSample.article.draftcontent));
        const editorState = EditorState.createWithContent(content);
        this.state = { editorState: editorState };   

        //const content = convertFromRaw(JSON.parse(Sample.rawJsText));
        //this.state = { editorState: EditorState.createWithContent(content) };

        //this.onChange = (editorState) => {
        //    this.setState({ editorState });
        //}
    }

    render() {
        return (
            <div>
                <div style={editorStyle.editor}>
                    <Editor 
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                    />
                </div>
            </div>
        );
    }
}








