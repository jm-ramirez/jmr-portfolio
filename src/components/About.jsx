import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    I have a degree in System Analyst. I have been working as a software developer since 2015, I am currently at Tecso Coop.
                    serving as a full stack developer. I feel very fortunate to have found what I am passionate about and to make it my job.
                    Over the years I have worked with the following languages, technologies and tools:
                    React Js, React Native, ASP.NET Core, ASP.NET MVC, ASP.NET Web API, Entity Framework, SQL Server, SQLite, PostgreSQL,
                    MySQL Server, Javascript, Visual Basic, Delphi, Azure Cloud, AWS, Apache Tomcat, SVN, Git, Jira, PHP, jQuery, CSS, HTML, Xml,
                    Apache HTTP Server, IIS, Xamarin.
                </p>
                {/* <br/>
                <p>

                </p> */}
            </div>
        </div>
    )
}

export default About