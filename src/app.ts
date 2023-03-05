import  express ,{Application} from "express";
const app:Application= express();
import userRoutes from './routes/user.routes'
import bookRoutes from './routes/book.routes'
import loanRoutes from './routes/loan.routes'


let port:number=3003;
app.use(express.json());

app.use('/user',userRoutes);
app.use('/books',bookRoutes);
app.use('/loan',loanRoutes);




app.listen(port,() => console.log(`express server started on port ${port}`));

