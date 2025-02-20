type UserType = {
    id: number;
    name: string;
  };
  
  const users: UserType[] = [
    { id: 1, name: "guru" },
    { id: 2, name: "arsh" },
    { id: 3, name: "taran" },
  ];
  
  export async function GET() {
    return Response.json(users);
  }
  
  export async function POST(request: Request) {
    try {
      const user = await request.json();
      
      if (!user.name) {
        return new Response(JSON.stringify({ error: "Name is required" }), {
          status: 400,
          headers: { "Content-Type": "application/json" },
        });
      }
  
      const newUser: UserType = {
        id: users.length + 1,
        name: user.name,
      };
  
      users.push(newUser);
  
      return new Response(JSON.stringify(newUser), {
        status: 201,
        headers: { "Content-Type": "application/json" },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: "Invalid JSON" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  }
  