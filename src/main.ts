import { mongodb_config } from '@config';
import { connect } from 'mongoose';

//Connect to database
{
    const {user, pass, host, port} = mongodb_config;
    connect(`mongodb://${user}:${pass}\@${host}:${port}`);
}