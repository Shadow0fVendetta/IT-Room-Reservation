function BookingForm() {

    return (
        <div>
            <div className="canvas">
                <div className="tile-obj-fill">
                    <div className="title">
                        <label for="title">Title</label><br/>
                        <input type="text" id="title" name="title"></input>
                    </div>
                    <div className="objective">
                        <label for="objective">วัตถุประสงค์</label><br/>
                        <input type="text" id="objective" name="objective"></input>
                    </div>
                    <div className="fullname">
                        <label for="fullname">ชื่อ</label><br/>
                        <input type="text" id="fullname" name="fullname"></input>
                    </div>
                    <div className="email">
                        <label for="email">Email</label><br/>
                        <input type="text" id="email" name="email"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookingForm;