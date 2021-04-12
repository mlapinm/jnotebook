using System;
using System.Diagnostics;
using Humanizer;

namespace d6042
{
    class Program
    {
        static void Main(string[] args)
        {
            Debug.WriteLine("aaaabbbbbb");

            Console.WriteLine("The count is 0 and this may cause an exception.");
            

            // Console.WriteLine("Quantities:");
            // HumanizeQuantities();

            // Console.WriteLine("\nDate/Time Manipulation:");
            // HumanizeDates();
        }
        static void HumanizeQuantities()
        {
            Console.WriteLine("case".ToQuantity(0));
            Console.WriteLine("case".ToQuantity(1));
            Console.WriteLine("case".ToQuantity(5));
        }

        static void HumanizeDates()
        {
            Console.WriteLine(DateTime.UtcNow.AddHours(-24).Humanize());
            Console.WriteLine(DateTime.UtcNow.AddHours(-2).Humanize());
            Console.WriteLine(TimeSpan.FromDays(1).Humanize());
            Console.WriteLine(TimeSpan.FromDays(16).Humanize());    
        }
    }
//     Quantities:
// 0 cases
// 1 case
// 5 cases

// Date/Time Manipulation:
// вчера
// 2 часа назад
// один день
// 2 недели


    
}
