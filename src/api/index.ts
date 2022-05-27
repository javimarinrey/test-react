import axios from "axios";

type User = {
    id: number;
    email: string;
    first_name: string;
};

type GetUsersResponse = {
    data: User[];
};

const getData = async () => {

    try {
        const { data, status } = await axios.get<GetUsersResponse>(
            process.env.REACT_APP_API_PATH || '',
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data));
        console.log('response status is: ', status);

        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }

    }
}

type CreateUserResponse = {
    name: string;
    job: string;
    id: string;
    createdAt: string;
};

const postData = async () => {
    try {
        // 👇️ const data: CreateUserResponse
        const { data } = await axios.post<CreateUserResponse>(
            process.env.REACT_APP_API_PATH || '',
            { name: 'John Smith', job: 'manager' },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            },
        );

        console.log(JSON.stringify(data));

        return data;

    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            // 👇️ error: AxiosError<any, any>
            return error.message;
        } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
        }
    }
}

export default {
    getData, postData
}