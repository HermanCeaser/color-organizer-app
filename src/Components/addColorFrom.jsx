import React from "react"

const AddColorForm = ({onNewColor = f => f}) =>{
	let _title, _color	
	const submit = (e) => {
		e.preventDefault()
		onNewColor(_title.value, _color.value)	
		_title.value = ''
		_color.value='#000000'
		_title.focus()
	}

	
	return(
		<form onSubmit={submit} >
			<div className="form-group">
				<label> Color Title </label>
				<div className="row">
					<div className="col-md-6 col-sm-4 col-xs-6">
               			<input ref={input => _title = input} type="text" className="form-control" placeholder="color title" required/>
					</div>
					<div className="col-md-4 col-sm-4 col-xs-6">
						<input ref={input =>_color = input} className="form-control" type="color"  required/><br/>
					</div>
					<div className="col-md-2 col-sm-4 col-xs-12">
						<button type="submit" className="btn btn-primary"> Add </button>
					</div>
				</div>
				              	
            </div>
			
			
			
		</form>
	)
	
}


export default AddColorForm