const connectDB = require('./config/database');
const Emp = require('./models/emp');

async function runCrud() {
  await connectDB();

  // CREATE
  const newEmp = new Emp({ id: 1, name: 'John Doe' });
  await newEmp.save();
  console.log('✅ Employee Created:', newEmp);

  // READ
  const employees = await Emp.find();
  console.log('📋 All Employees:', employees);

  // UPDATE
  const updated = await Emp.findOneAndUpdate(
    { id: 1 },
    { name: 'Sanvika Dakhale' },
    { new: true }
  );
  console.log('✏️ Employee Updated:', updated);

  // DELETE
  const deleted = await Emp.findOneAndDelete({ id: 1 });
  console.log('🗑️ Employee Deleted:', deleted);

  process.exit(0); // Exit script
}

runCrud();
