// get homepage

exports.homepage = async(req,res) => {
    const locals = {
        title: "Notes app",
        description: "free notes app.",
    }

    res.render('index', locals); 
}

// get homepage  about//

exports.about = async(req,res) => {
    const locals = {
        title: "About - Notes app",
        description: "free notes app.",
    }

    res.render('about', locals); 
}