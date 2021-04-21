const models = require('../../models');

exports.get_table = (req,res) => {
    models.Database.findAll({

    }).then((table) => {
        res.render('admin/table.html',{table});
    });
}

exports.get_table_write = (req,res) => {
    res.render('admin/write.html');
}

exports.post_table_write = (req,res) => {
    models.Database.create({
        name : req.body.name,
        price : req.body.price,
        description : req.body.description
    }).then(() => {
        res.redirect('/admin/table');
    });
}

exports.get_table_detail = (req,res) => {
    models.Database.findByPk(req.params.id).then((db) => {
        res.render('admin/detail.html',{db});
    });
};

exports.get_table_edit = (req,res) => {
    models.Database.findByPk(req.params.id).then((db) => {
        res.render('admin/write.html',{db});
    });
};

exports.post_table_edit = (req,res) => {
    models.Database.update(
        {
            name : req.body.name,
            price : req.body.price,
            description : req.body.description
        },
        {
            where : {id : req.params.id}
        }
    ).then(() => {
        res.redirect('/admin/table/detail/' + req.params.id);
    });
}

exports.get_table_delete = (req,res) => {
    models.Database.destroy({
        where : {
            id : req.params.id
        }
    }).then(() => {
        res.redirect('admin/table');
    });
};