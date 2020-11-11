[1](2)
D:\mailCloud\prjother\tmp\1\c101_Pitfalls to look for on your test.md  




[BLANK_AUDIO]
Hi everyone, welcome back.
This is your last lesson in net and it's all about the pitfalls that you may actually encounter in your net encounters.
All right.
Things you need to look for, things you need to look for,
whether it's overload or dynamic.
It is case sensitive.
So if your pool is in lower case,
make sure that your pool here is in lower case as well.
Because if this is lower case and this is upper case, it will not work.
It will not work because it'll think, it's a different pool.
If your access list is 1, and this is pointing to access list 11, it's pointing to a different access list.
It will not work.
So those right there are the major wants to look for, when they're saying hey,
not every, no, no one is able to be able,
no one is able to get out to the internet after the nat configuration was done, what is the problem?
All right?
Those can be a problems, the, the names,
the pool names do not coincide because of upper case, you know,
case sensitivity or is pointing to the wrong access list.
Okay?
Now, this is nat overload.
Those are, the only other problem would be if it's a nat overload issue then you're looking at they forgot to put the word overload.
Those are the only three things that I would see here as far as main things.
The case sensitivities of the pool.
Pointing to the wrong access lists.
And they forgot to put overload, they forgot to put overload.
The only other thing I can think of as far as overload would be definitely that they don't have enough.
They put the wrong wild card mask.
They only allow, let's say, 14 people to get to.
So they're all the first 14 to get there,
they're good.
But the rest of the, everybody else, hey,
man, we can't get there.
So, take a look at the wildcard mask.
The wildcard mask is not matching for the amount of people that you want to go out.
All right?
So, be very careful that you're permitting to go out, so these are the pitfalls that you look for.
Again, the case sensitivity in the pool,
point to the wrong access list, not wrong wild card mask.
Right here you're only allowing 14 people not 254 people.
So, you need to make sure that the wildcard mask is correct, and of course,
they forgot to put the word overload.
That's for nat overload, for dynamic, for dynamic obviously,
not enough IP addresses you want 254
people to get out,
but you only have let's say 15, well, you don't have enough.
You didn't purchase enough public IP addresses to get out.
So that will be a big issue with dynamic,
because dynamic is a one-to-one mapping.
So you definitely need to make sure if it's a dynamic question,
that you take a look at that range of IP addresses.
They can also mess around with you in the mask.
All right?
But normally, they'll just use the range.
And again, take a look at the wildcard mask.
How many people are they allowing to get out?
The case sensitivity, just like in overload, it's the same thing.
Laz, lowercase, laz lowercase.
Point to the right access list,
point to the right access list, these are things that could, are the gotchas.
Not to mention that they may have forgotten to put the IP nat inside.
Or, they could have forgotten to put the IP nat outside.
So when they show you this screen right here.
What you're looking for is IP nat inside.
IP nat outside.
That indeed, this is the outside.
That it's pointing to the public address and that this is pointing to the private address.
So be on the lookout for that.
And what we just talked about now in the pool, in the pool.
Case sensitivity, point to the right access list, correct wildcard mask for the access list permitting a certain network.
Those are the pitfalls that get people when they do the nat, all right?
That is what you're looking for.
Remember, three types of nat, static,
dynamic,
and nat overload, or call it pat, all right?
You're gonna go ahead and, more likely it's gonna be an overload or dynamic question and the pitfalls that we just talked about.
The IP not inside, IP not outside, make sure they're in their correct order.
And obviously that the pools match,
pointing to the right access list.
Things of that nature and you should be fine.
Nat is not difficult at all, you should have no issues,
play this video over and over again.
Go to sleep with it, so you have nightmares about me,
and then hey, but you'll pass your certification, right?
That's the whole goal of the whole thing.
All right?
Nat is over.
Nat is over, we now know nat, now will move on to the next session,
which I believe is wide area networks.
I will be seeing you there.
[BLANK_AUDIO]