import React, {Component} from 'react'

export class TextInput extends Component
{
    constructor (props) {
        super(props)
        this.state = {
            value: this.props.initialValue,
            focus:  false,
            empty:  true,
            error:  false,
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleFocus = this.handleFocus.bind(this)
        this.handleBlur = this.handleBlur.bind(this)
        this.slot = React.createRef()

    }
    
    componentDidMount() {
        this.aplyClasses();
    }
    
    handleChange (event) {
        event.preventDefault();
        console.log(event.target.value.length)
        this.setState({
            ...this.state,
            value: event.target.value,
            empty: event.target.value.length === 0 ? true : false, 
        }, this.aplyClasses)

    }

    handleFocus (event) {
        event.preventDefault();
        this.setState({
            ...this.state,
            focus: true,
        }, this.aplyClasses)
    }
    
    aplyClasses() {
        if(this.state.focus){
            this.slot.current.classList.add('focus');
        }
        if(this.state.empty){
            this.slot.current.classList.add('empty')
        } else {
            this.slot.current.classList.remove('empty')
        }
        if(this.state.error){
            this.slot.current.classList.add('error')
        } else {
            this.slot.current.classList.remove('error')
        }
    }

    handleBlur() {
        if(this.state.focus){
            this.slot.current.classList.remove('focus');
        }
    }

    render () {
        return (
            <div ref={this.slot} className="solid slot">
                <input className="solid input" onFocus={this.handleFocus} onBlur={this.handleBlur} onChange={this.handleChange} value={this.state.initialValue} name={this.props.name} type="text"/>
                <label className="solid label" htmlFor={this.props.name}>{this.props.label}</label>
            </div>
        )
    }
}