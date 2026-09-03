import { dataAboutPage } from "@/data";

export const TimeLine = () => {
  return (
    <div className="flex flex-col justify-center divide-y divide-slate-200">
      <div className="w-full max-w-3xl mx-auto md:pb-25 md:pt-5">
        <div className="-my-6">
          {dataAboutPage.map(
            (data: {
              id: number;
              title: string;
              subtitle: string;
              description: string;
              date: string;
            }) => (
              <div key={data.id} className="relative min-w-0 py-6 pl-8 sm:pl-32 group">
                <h3 className="mb-1 text-2xl font-bold break-words sm:mb-0 text-(--bg-secondary)">
                  {data.title}
                </h3>
                <div
                  className="flex flex-col sm:flex-row items-start mb-1
                group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full
                before:px-px before:bg-slate-300 `sm:before:ml-[6.5rem]` before:self-start before:-translate-x-1/2 
                before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-(--bg-secondary) 
                after:border-4 after:box-content after:border-slate-50 after:rounded-full `sm:after:ml-[6.5rem]` after:-translate-x-1/2 
                after:translate-y-1.5"
                >
                  <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-white bg-(--bg-secondary) rounded-full">
                    {data.date}
                  </time>
                  <p className="max-w-full text-lg font-bold text-gray-400 break-words sm:text-xl">
                    {data.subtitle}
                  </p>
                </div>
                  <p className="max-w-md text-slate-400 break-words">
                    {data.description}
                  </p>
              </div>
            ),
          )}
        </div>
      </div>
    </div>
  );
};
