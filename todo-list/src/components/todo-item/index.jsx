import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";

function TodoItem({todo, fetchDetailsOfCurrentTodo}){
    // console.log(todo);
    return <Card key={todo.id} sx={{
        maxWidth:850,
        display:"flex",
        flexDirection:"column",
        justifyContent:'space-between',
    }}>
        <CardContent >
            <Typography variant="h5" color={"text.Secondary"}>
                {todo?.todo}

            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={()=>
                fetchDetailsOfCurrentTodo(todo?.id)
            } sx={{
                backgroundColor:'black',
                color:'white',
                opacity:'0.75',
                '&:hover':{
                    backgroundColor:'black',
                    color:'white',
                    opacity:'1'
                },
            }}>
                Show Details
            </Button>
        </CardActions>
    </Card>
}

export default TodoItem