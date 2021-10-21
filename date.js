exports.getDate = function(){
    const today = new Date();

    const options = {
        weekday: "long",
        day: "numeric",
        year: "numeric",
        month:"long"
    };

    // using Date() created an object and used toLocaleDateString() to format the conventions and coustomize the rendering.

  return today.toLocaleDateString("en-US", options);

};


exports.getDay = function(){
    const today = new Date();

    const options = {
        weekday: "long"
    };

    // using Date() created an object and used toLocaleDateString() to format the conventions and coustomize the rendering.

 return today.toLocaleDateString("en-US", options);

}

