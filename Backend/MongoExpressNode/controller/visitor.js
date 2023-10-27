const Visitor = require ('../model/visitor');

const createAVisitor = async(req,res,next) => {
    try {
        const {visitorName} = req.body;
        const newVisitor = new Visitor({visitorName});
        await newVisitor.save();
        res.status(201).json(newVisitor);
    } 
    catch (error) {
        res.status(400).json({error:error.message});
    }
}

const getAllVisitors = async(req,res,next) => {
    try{
        const allData = await Visitor.find();
        res.json(allData);
    }
    catch(error){
        res.status(500).send({error: error.message});
    }
}



const updateVisitor = async (req, res, next) => {
    try {
      const { _id, visitorName } = req.body;
  
      const visitor = await Visitor.findById(_id);
  
      if (!visitor) {
        return res.status(404).json({ error: 'Visitor not found' });
      }
  
      visitor.visitorName = visitorName;
      await visitor.save();
  
      res.status(200).json(visitor);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  

//use ID of user to get the info of order placed by the user

module.exports = {createAVisitor,getAllVisitors,updateVisitor};