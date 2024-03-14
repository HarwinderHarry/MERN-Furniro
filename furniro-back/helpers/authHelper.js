import bcrypt from 'bcrypt';

export const hashPassword = async (password) =>{
    try {
        const saltRounds = 10;
        const hashpswd = await bcrypt.hash(password, saltRounds);
        return hashpswd;
        
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword = async(password, hashpswd) =>{
    return bcrypt.compare(password,hashpswd);
}