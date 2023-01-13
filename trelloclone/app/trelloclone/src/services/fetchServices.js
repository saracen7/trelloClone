export async function getLists() {

    try{
        const response = await fetch('/posts/users');
        return await response.json();
    }catch(error) {
        return [];
    }
    
}