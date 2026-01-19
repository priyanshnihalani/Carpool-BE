const branchService = require("../service/branch.service");

exports.createBranch = async (req, res) => {
  try {
    const { name, location } = req.body;
    const branch = await branchService.addBranch(name, location);
    res.json({ success: true, branch });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getBranches = async (req, res) => {
  try {
    const branches = await branchService.getAllBranches();
    res.json({ success: true, branches });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

exports.getBranchCars = async (req, res) => {
  try {
    const { branchId } = req.params;
    const branch = await branchService.getBranchWithCars(branchId);

    if (!branch) {
      return res.status(404).json({ success: false, message: "Branch not found" });
    }

    res.json({
      success: true,
      branch: {
        id: branch.id,
        name: branch.name,
        cars: branch.Cars
      }
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
