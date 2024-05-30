import { Component } from "react";

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNameEmpty: false,
            isCommentEmpty: false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        if (event.target.type === 'text') {
            (event.target.value === '') ? this.setState({isNameEmpty: true}) : this.setState({isNameEmpty: false});
        } else if (event.target.type === 'textarea') {
            (event.target.value === '') ? this.setState({isCommentEmpty: true}) : this.setState({isCommentEmpty: false});
        }
    }

    handleEmpty() {
        return (
            <p style={styles.alert}>Tidak boleh Kosong</p>
        );
    }
    handleSubmit(event) {
        event.preventDefault();
        if (event.target[0].value === '' || event.target[1].value === '') {
            alert('Tidak boleh kosong!');
        } else {
            this.props.onFormSubmit();
        }
    }

   render() {
    return (
        <form style={styles.form} onSubmit={(event) => {this.handleSubmit(event)}}>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" onChange={(event) => {this.handleChange(event)}}/>
                {(this.state.isNameEmpty) ? this.handleEmpty(): ""}
            </div>
            <div>
                <label htmlFor="comment">Comment:</label>
                <textarea name="comment" id="comment" onChange={(event) => {this.handleChange(event)}}></textarea>
                {(this.state.isCommentEmpty) ? this.handleEmpty(): ""}
            </div>
            <button type="submit">Submit</button>
        </form>
    );
   }
}

const styles = {
    alert: {
        fontSize: ".6rem",
        color: "red"
    }, 
    form: {
        display: "flex",
        flexDirection: "column",
        gap: "3px"
    }
};

export default Form;