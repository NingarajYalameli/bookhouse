export const Testimonials = () => {
  return (
    <section className='my-20'>
        <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Customers About BookHouse</h1>    
        <div className="grid mb-8 rounded-lg border border-gray-200 shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2">
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-t-lg border-b border-gray-200 md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Very easy this was to integrate</h3>
                    <p className="my-4 font-light">If you care for your time, I hands down would go with this."</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1566435722960-3c645c72a461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="user" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>XYZ</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Developer at XYZ Company</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-tr-lg border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Solid foundation for any project</h3>
                    <p className="my-4 font-light">Designing with Figma components that can be easily translated to the utility classes of Tailwind CSS is a huge timesaver!"</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1558630926-dd2956629b42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="user" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>ABC</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Lead designer at ABC Company</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-bl-lg border-b border-gray-200 md:border-b-0 md:border-r dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Mindblowing workflow</h3>
                    <p className="my-4 font-light">Aesthetically, the well designed components are beautiful and will undoubtedly level up your next application."</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1600238323600-ef697b27304d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80" alt="user" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>PQR</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">Software Engineer at PQR Company</div>
                    </div>
                </figcaption>    
            </figure>
            <figure className="flex flex-col justify-center items-center p-8 text-center bg-white rounded-b-lg border-gray-200 md:rounded-br-lg dark:bg-gray-800 dark:border-gray-700">
                <blockquote className="mx-auto mb-4 max-w-2xl text-gray-500 lg:mb-8 dark:text-gray-400">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Efficient Collaborating</h3>
                    <p className="my-4 font-light">You have many examples that can be used to create a fast prototype for your team."</p>
                </blockquote>
                <figcaption className="flex justify-center items-center space-x-3">
                    <img className="w-9 h-9 rounded-full" src="https://images.unsplash.com/photo-1566890910598-c5768889e83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80" alt="user" />
                    <div className="space-y-0.5 font-medium dark:text-white text-left">
                        <div>DEF</div>
                        <div className="text-sm font-light text-gray-500 dark:text-gray-400">CTO at DEF Company</div>
                    </div>
                </figcaption>    
            </figure>
        </div>
    </section>
  )
}