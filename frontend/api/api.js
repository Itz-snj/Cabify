const BASE_URL = "http://localhost:4000";

export const registerUser = async (userData) => {
    try {
        const response = await fetch(`${BASE_URL}/user/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || data.errors?.[0]?.msg || 'Registration failed');
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
};


export const loginUser = async (userData)=>{
    try {
        const response = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData),
            credentials: 'include'
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || data.errors?.[0]?.msg || 'Registration failed');
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export const logoutUser = async ()=>{
    try {
        const response = await fetch(`${BASE_URL}/user/logout`, {
            method: 'GET',
            credentials: 'include'
        });

        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || data.errors?.[0]?.msg || 'Logout failed');
        }

        return data;
    } catch (error) {
        throw new Error(error.message);
    }

}